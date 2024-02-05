interface FetchOption {
  timeout?: number;
  next?: {
    revalidate: number;
  };
}

export const fetchWithTimeout = async (
  resource: string | URL | Request,
  options: FetchOption = {}
) => {
  const { timeout = 8000 } = options;

  const controller = new AbortController();
  const id = setTimeout(() => controller.abort(), timeout);
  try {
    const response = await fetch(resource, {
      ...options,
      signal: controller.signal
    });
    clearTimeout(id);
    return response;
  } catch (error) {
    clearTimeout(id);
    throw error;
  }
};
