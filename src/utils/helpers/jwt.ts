import * as jwt from 'jsonwebtoken';

export const generateComboTokens = async (
    phone: string,
    expiresIn: string = '10y',
) => {
    const [access_token, refresh_token] = await Promise.all([
        generateToken(phone),
        generateToken(phone, expiresIn),
    ]);
    return {
        access_token,
        refresh_token,
    };
};

export const generateToken = (
    phone: string,
    expiresIn: string = '10y',
    secret: string = 'save-sentences',
) => {
    return jwt.sign({ phone }, secret, { expiresIn });
};

export const verifyToken = (token: string): { isTokenExpired: boolean, payload?: any } => {
    try {
        const jwtPayload = jwt.verify(token, 'save-sentences');
        return {
            payload: jwtPayload,
            isTokenExpired: Date.now() >= jwtPayload.exp * 1000,
        } as any;
    } catch (error) {
        console.log({error});
        
        return { isTokenExpired: true } as any;
    }
};
