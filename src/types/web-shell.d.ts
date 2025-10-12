/**
 * Type definitions for WebShell IPC Bridge
 * Generated from web-shell-rs
 */

/**
 * Log level for logging messages
 */
export type LogLevel = "debug" | "info" | "warn" | "error";

/**
 * Screen information returned from the backend
 */
export interface ScreenInfo {
  /** Screen width in pixels */
  width: number;
  /** Screen height in pixels */
  height: number;
  /** Scale factor (e.g., 1.0, 1.5, 2.0 for HiDPI) */
  scaleFactor: number;
  /** X position of the monitor */
  x: number;
  /** Y position of the monitor */
  y: number;
}

/**
 * Request sent from JavaScript to Rust
 */
export interface WebShellRequest {
  /** Unique request identifier */
  id: number;
  /** Method name to invoke on the Rust side */
  method: string;
  /** Optional parameters to pass to the method */
  params?: any;
}

/**
 * Response received from Rust
 */
export interface WebShellResponse {
  /** Request identifier matching the original request */
  id: number;
  /** Response type indicating success or error */
  type: "success" | "error";
  /** Response data or error message */
  data: any;
}

/**
 * WebShell class for invoking Rust methods from JavaScript
 */
export class WebShell {
  private _nextId: number;
  private _pending: Map<
    number,
    { resolve: (value: any) => void; reject: (reason?: any) => void }
  >;

  constructor();

  /**
   * Invoke a Rust method and return a promise
   * @param method - The method name to call
   * @param params - Parameters to pass to the method
   * @returns Promise that resolves with the result or rejects with error
   */
  invoke<T = any>(method: string, params?: any): Promise<T>;

  /**
   * Send a log message to the Rust backend
   * @param level - Log level (debug, info, warn, error)
   * @param message - The message to log
   * @returns Promise that resolves when the log is processed
   */
  log(level: LogLevel, message: string): Promise<void>;

  /**
   * Log a debug message
   * @param message - The message to log
   */
  debug(message: string): Promise<void>;

  /**
   * Log an info message
   * @param message - The message to log
   */
  info(message: string): Promise<void>;

  /**
   * Log a warning message
   * @param message - The message to log
   */
  warn(message: string): Promise<void>;

  /**
   * Log an error message
   * @param message - The message to log
   */
  error(message: string): Promise<void>;

  /**
   * Get the actual screen information from the Rust backend
   * Returns the dimensions and properties of the monitor where the window is displayed
   * @returns Promise that resolves with screen information
   */
  getScreenInfo(): Promise<ScreenInfo>;

  private _handleResponse(response: WebShellResponse): void;
}

/**
 * IPC interface for posting messages to Rust
 */
export interface IPC {
  /**
   * Post a message to the Rust backend
   * @param message - JSON stringified WebShellRequest
   */
  postMessage(message: string): void;
}

/**
 * Global window extensions
 */
declare global {
  interface Window {
    /** Global WebShell instance for IPC communication */
    webShell: WebShell;
    /** Low-level IPC interface */
    ipc: IPC;
  }
}
