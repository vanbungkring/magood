class HttpOutput {
    public data: any;
    public message: string;
    constructor(message: string, data?: any) {
        this.data = data;
        this.message = message;
  }
}
export default HttpOutput;
