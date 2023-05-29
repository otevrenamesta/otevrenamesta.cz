const request = (method) => {
  return (url, options) => {
    const requestOptions = {
      method,
      baseURL: useRuntimeConfig().public.baseApiUrl,
      headers: {
        ...(options?.headers || {}),
      },
      ...options,
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
