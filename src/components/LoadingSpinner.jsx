function LoadingSpinner() {
  return (
    <div
      className="flex flex-col items-center justify-center py-16"
      role="status"
      aria-label="Loading places"
    >
      <div className="h-10 w-10 animate-spin rounded-full border-4 border-mist border-t-moss"></div>

      <p className="mt-4 font-mono text-sm text-slate">
        Loading places...
      </p>
    </div>
  );
}

export default LoadingSpinner;