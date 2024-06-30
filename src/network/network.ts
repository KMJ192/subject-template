export enum METHOD {
  GET = 'GET',
  POST = 'POST',
  PUT = 'PUT',
  DELETE = 'DELETE',
  PATCH = 'PATCH',
}

export type REQUEST_MODEL = {
  url: string;
  method: METHOD;
  headers?: Headers;
  body?: unknown;
  params?: { [key: string]: string };
};

export type ResponseModel<T> = {
  status: number;
  data: T | null;
  isSuccess: boolean;
  message: string;
};

export const networkInstance = () => {
  let apiAddress: string | undefined;

  const setPrefix = (url: string) => {
    apiAddress = url;
  };

  const fetcher = async <T = unknown>({
    url,
    method,
    headers,
    body,
    params,
  }: REQUEST_MODEL): Promise<ResponseModel<T>> => {
    const h = headers ?? new Headers();
    h.append('Content-type', 'application/json');

    let address = apiAddress ? `${apiAddress}${url}` : url;

    if (params) {
      let paramToString = '';
      Object.keys(params).forEach((key: string) => {
        if (paramToString === '') {
          paramToString = `${key}=${params[key]}`;
        } else {
          paramToString = `${paramToString}&${key}=${params[key]}`;
        }
      });
      if (paramToString !== '') {
        address = `${address}?${paramToString}`;
      }
    }

    return fetch(address, {
      method,
      headers: h,
      body: JSON.stringify(body),
    })
      .then(async (data) => {
        const res: T = await data.json();
        return {
          isSuccess: true,
          data: res,
          status: data.status,
          message: data.statusText,
        };
      })
      .catch((e: Error) => {
        return {
          data: null,
          isSuccess: false,
          status: 500,
          message: e.message,
        };
      });
  };

  return {
    setPrefix,
    fetcher,
  };
};
