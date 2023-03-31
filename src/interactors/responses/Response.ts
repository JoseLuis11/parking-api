interface Response<T> {
  status: number;
  data?: T;
  error?: string;
}

export default Response;
