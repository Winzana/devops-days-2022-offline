export type Message = {
  title: string;
  message?: string;
};

export class EventsStatusListener {
  private static instance: EventsStatusListener;

  // eslint-disable-next-line @typescript-eslint/no-empty-function
  private constructor() {}

  private onSuccessListeners: Array<(message: Message) => void> = [];
  private onErrorListeners: Array<(message: Message) => void> = [];

  public static getInstance(): EventsStatusListener {
    if (!EventsStatusListener.instance) {
      EventsStatusListener.instance = new EventsStatusListener();
    }
    return EventsStatusListener.instance;
  }

  public addOnSuccessListener = (listener: (message: Message) => void) => {
    this.onSuccessListeners.push(listener);
  };

  public removeOnSuccessListener = (listener: (message: Message) => void) => {
    const listenerToRemove = this.onSuccessListeners.indexOf(listener);
    delete this.onSuccessListeners[listenerToRemove];
  };

  public removeOnErrorListener = (listener: (message: Message) => void) => {
    const listenerToRemove = this.onErrorListeners.indexOf(listener);
    delete this.onErrorListeners[listenerToRemove];
  };

  public addOnErrorListener = (listener: (message: Message) => void) => {
    this.onErrorListeners.push(listener);
  };

  public publishSuccessMessage = (message: Message) => {
    this.onSuccessListeners.forEach((listener) => {
      listener(message);
    });
  };

  public publishErrorMessage = (message: Message) => {
    this.onErrorListeners.forEach((listener) => {
      listener(message);
    });
  };
}
