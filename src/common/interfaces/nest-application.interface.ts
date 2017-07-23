import { MicroserviceConfiguration } from '@nestjs/microservices';
import { INestMicroservice, ExceptionFilter, PipeTransform } from './index';
import { WebSocketAdapter } from './web-socket-adapter.interface';

export interface INestApplication {
    init(): Promise<void>;
    listen(port: number, callback?: () => void): Promise<any>;
    setGlobalPrefix(prefix: string): void;
    useWebSocketAdapter(adapter: WebSocketAdapter): void;
    connectMicroservice(config: MicroserviceConfiguration): INestMicroservice;
    getMicroservices(): INestMicroservice[];
    startAllMicroservices(callback: () => void): void;
    useGlobalFilters(...filters: ExceptionFilter[]);
    useGlobalPipes(...pipes: PipeTransform[]);
    close(): void;
}