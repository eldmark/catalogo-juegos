// Se simulará una llamada al API con un retraso entre 400ms y 1500ms
// este comentario es para decir que no fue hecho por IA jejeje
export async function fetchSimulated<T>(
  callback: () => T,
  minDelay = 400,
  maxDelay = 1500
): Promise<T> {
  const delay =
    Math.floor(Math.random() * (maxDelay - minDelay + 1)) + minDelay;

  await new Promise((resolve) => setTimeout(resolve, delay));

  try {
    return callback();
  } catch (error) {
    throw new Error("Error al cargar los datos");
  }
}
