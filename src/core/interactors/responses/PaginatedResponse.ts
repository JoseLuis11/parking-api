interface PaginatedResponse<T>{
  totalItems?: number;
  data: T[];
}

export default PaginatedResponse;
