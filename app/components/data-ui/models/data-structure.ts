export abstract class DataStructure<Data> {
    private callbacks: ((data: Data) => void)[] = [];

    abstract get data(): Data;

    notify() {
        this.callbacks.forEach(cb => cb(this.data));
    }

    subscribe(callback: (data: Data) => void): () => void {
        this.callbacks.push(callback);

        // Return a function that will unsubscribe the callback
        return () => {
            this.callbacks = this.callbacks.filter(cb => cb !== callback);
        }        
    }
}