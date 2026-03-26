function Toast({ message, tone = "success" }) {
  return (
    <div className={`toast toast--${tone}`} role="status" aria-live="polite">
      <span className="toast__dot" />
      <span>{message}</span>
    </div>
  );
}

export default Toast;
