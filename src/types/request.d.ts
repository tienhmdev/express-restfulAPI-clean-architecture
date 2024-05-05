import { AppRequest } from "./express";

type MetaDataBase = {
  offset?: number;
  limit?: number;
  sortBy?: string;
  orderBy?: "ASC" | "DESC";
};

type MetaDataDefault = {
  metadata?: { total?: number } & MetaDataBase;
} & MetaDataBase;

type SearchData = {
  searchBy?: string;
  searchKeywords?: string;
};

type SearchRequest = AppRequest<any, any, MetaDataDefault & SearchData>;
