declare class Server {
    private app;
    private port;
    private apiPaths;
    constructor();
    middlewares(): void;
    routes(): void;
    listen(): void;
}
export default Server;
//# sourceMappingURL=server.d.ts.map