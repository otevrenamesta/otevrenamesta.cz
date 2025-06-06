const request = (method) => {
  return (url, options) => {
    const requestOptions = {
      method,
      baseURL: useRuntimeConfig().public.baseApiUrl,
      ...options,
      headers: {
        ...(options?.headers || {}),
      },
    };

    return $fetch(url, requestOptions);
  };
};

export default {
  delete: request('DELETE'),
  get: request('GET'),
  patch: request('PATCH'),
  post: request('POST'),
  put: request('PUT'),
};
