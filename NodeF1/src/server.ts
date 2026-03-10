import fastify from "fastify";
import cors from '@fastify/cors';

const server = fastify({logger: true});

server.register(cors,{
    origin: "*",
    methods: ['GET', 'POST']
})

const teams = [
    {id:1, name:"Ferrari", base:"Italy"},
    {id:2, name:"Mercedes", base:"Germany"},
    {id:3, name:"Red Bull Racing", base:"Austria"},
    {id:4, name:"McLaren", base:"United Kingdom"},
    {id:5, name:"Aston Martin", base:"United Kingdom"},
    {id:6, name:"Alpine", base:"France"},
    {id:7, name:"Williams", base:"United Kingdom"},
    {id:8, name:"RB", base:"Italy"},
    {id:9, name:"Sauber", base:"Switzerland"},
    {id:10, name:"Haas", base:"United States"}
];

const drivers = [
    {id:1, name:"Max Verstappen", team:"Red Bull Racing"},
    {id:2, name:"Lewis Hamilton", team:"Mercedes"},
    {id:3, name:"Charles Leclerc", team:"Ferrari"},
    {id:4, name:"Lando Norris", team:"McLaren"},
    {id:5, name:"Fernando Alonso", team:"Aston Martin"},
    {id:6, name:"Carlos Sainz", team:"Ferrari"},
    {id:7, name:"George Russell", team:"Mercedes"},
    {id:8, name:"Oscar Piastri", team:"McLaren"},
    {id:9, name:"Sergio Perez", team:"Red Bull Racing"},
    {id:10, name:"Pierre Gasly", team:"Alpine"}
]

server.get("/teams", async (req, res)=>{
    res.type("application/json").code(200);

    return {teams};
});

server.get("/drivers", async (req, res)=>{
    res.type("application/json").code(200);

    return drivers;
});


interface DriveParams{
    id: string
}

server.get<{Params: DriveParams}>("/drivers/:id", async (req, res)=>{

    const id = parseInt(req.params.id);

    const driver = drivers.find(d => d.id === id);

    if(!driver){
        res.type("application/json").code(404);
        return {message: "Driver not found"};
    };

    res.type("application/json").code(200);

    return {driver};
});

server.listen({port:3333}, ()=>{
    console.log("Server init");
});