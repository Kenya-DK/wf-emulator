export * from "./types";
import axios, { AxiosInstance, AxiosRequestConfig } from "axios";
import { AuthModule } from "./auth";
import { ComposedListener } from "@utils";
import { EventOperation } from "./types";

export class RestClient {
  private client: AxiosInstance;
  public listener = new ComposedListener();
  constructor(private baseUrl: string) {
    this.client = axios.create({ baseURL: baseUrl });
    this.auth = new AuthModule(this);
    // this.app = new AppModule(this);
    // this.auction = new AuctionModule(this);
    // this.chat = new ChatModule(this);
    // this.debug = new DebugModule(this);
    // this.items = new ItemModule(this);
    // this.live_scraper = new LiveScraperModule(this);
    // this.order = new OrderModule(this);
    // this.stock = new StockModule(this);
    // this.transaction = new TransactionModule(this);
    // this.events = new EventModule(this);
    // this.notification = new NotificationModule(this);
    // this.statistic = new StatisticModule(this);
    // this.cache = new CacheModule(this);
  }


  // Methods  
  private async sendRequest<T>(url: string, method: string, body?: any, _config: AxiosRequestConfig = {}): Promise<T> {

    const { data } = await this.client.request<T>({
      url,
      method,
      headers: {
        'Content-Type': 'text/plain',
      },
      data: body,
    });
    return data;
  }


  async get<T>(path: string, parameters?: string[], body?: { [key: string]: any }): Promise<T> {
    const url = `${this.baseUrl}/${path}${(parameters && parameters.length > 0) ? `?${parameters.join("&")}` : ""}`;
    return await this.sendRequest<T>(url, "GET", body);
  }


  async put<T>(path: string, body: { [key: string]: any }): Promise<T> {
    const url = `${this.baseUrl}/${path}`;
    return await this.sendRequest<T>(url, "PUT", body);
  }

  async post<T>(path: string, body?: { [key: string]: any }, parameters?: string[]): Promise<T> {
    const url = `${this.baseUrl}/${path}${(parameters && parameters.length > 0) ? `?${parameters.join("&")}` : ""}`;
    return await this.sendRequest<T>(url, "POST", body);
  }

  async delete<T>(path: string, body?: { [key: string]: any }): Promise<T> {
    const url = `${this.baseUrl}/${path}`;
    return await this.sendRequest<T>(url, "DELETE", body);
  }

  objectToParameters(obj: any): Array<string> {
    const searchParams: string[] = [];
    const entries = Object.entries(obj);
    for (let index = 0; index < entries.length; index++) {
      const element = entries[index];
      // Skip undefined and empty arrays
      if (element[1] === undefined || element[1] === "") continue;
      if (Array.isArray(element[1])) {
        const array = element[1] as any[];
        if (array.length <= 0) continue;

        searchParams.push(array.map((item) => `${element[0]}=${item}`).join("&"));
      } else
        searchParams.push(`${element[0]}=${element[1]}`);
    }
    return searchParams;
  }


  // Modules
  auth: AuthModule;
}
const OnEvent = <T>(event: string, callback: (data: T) => void) => api.listener.add(event, callback)
const OnDataEvent = <T>(event: string, callback: (data: { operation: EventOperation, data: T }) => void) => api.listener.add(event, callback)

const OffEvent = <T>(event: string, callback: (data: T) => void) => api.listener.remove(event, callback)
const OffDataEvent = <T>(event: string, callback: (data: { operation: EventOperation, data: T }) => void) => api.listener.remove(event, callback)

const SendEvent = async (event: string, data?: any) => api.listener.fire(event, data)
const SendDataEvent = async (event: string, operation: EventOperation, data: any) => api.listener.fire(event, { operation, data })

export { OnEvent, OnDataEvent, OffEvent, OffDataEvent, SendEvent, SendDataEvent }
export const api = new RestClient(import.meta.env.VITE_API_URL)
