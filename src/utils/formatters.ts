const formatTime = (timeInMs: number): string => {
  const hundredth = Math.floor((timeInMs / 10) % 100);
  const seconds = Math.floor((timeInMs / 1000) % 60);
  const minutes = Math.floor((timeInMs / (1000 * 60)) % 60);
  const hours = Math.floor(timeInMs / (1000 * 60 * 60));

  const hundredthText = hundredth.toString().padStart(2, "0");
  const ss = seconds.toString().padStart(2, "0");
  const mm = minutes.toString().padStart(2, "0");
  const hh = hours.toString();

  return `${hh}:${mm}:${ss}.${hundredthText}`;
};

export { formatTime };
