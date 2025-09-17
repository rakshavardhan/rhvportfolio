interface LoadingScreenProps {
  isLoading: boolean;
}

export default function LoadingScreen({ isLoading }: LoadingScreenProps) {
  return (
    <div className={`loader ${!isLoading ? 'fade-out' : ''}`} data-testid="loading-screen">
      <div className="text-center">
        <div className="spinner mx-auto mb-4" data-testid="loading-spinner"></div>
        <p className="text-muted-foreground" data-testid="loading-text">Loading Portfolio...</p>
      </div>
    </div>
  );
}
