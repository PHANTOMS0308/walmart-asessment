export function rethrowError(error: any) {
  if (error instanceof Error) throw error;
  throw new Error("Unknown Error occured", { cause: error });
}

export function handleCatchError(error: any) {
  if (error instanceof Error) {
    console.error(error.message);
    if (error.cause) console.log("Cause of Error", error.cause);
  } else {
    console.log("Unkown Error occured", error);
  }
}

export function handleFetchError(res: Response, cause: any) {
  if (!res.ok) {
    throw new Error(`Request failed with status code: ${res.status}`, {
      cause,
    });
  }
}
