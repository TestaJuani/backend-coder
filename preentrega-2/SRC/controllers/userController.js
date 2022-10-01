const users = [];//Creo usuarios vacios
let counter = 1;

const getUsers = (req,res) =>{
    return res.json(users);  
};

const getUserByid = (req,res) =>{
   const params = req.params;
   const user = users.find((user) => { // find hace un while del arreglo users, hasta que encuentre el id == al que llega por params (la url: "/numero")
      return user.id == params.id;
  });
   if (user) {
      return res.json(user);  
   } 
   else{
     return res.sendStatus(404);
   }
};

const addUser = (req,res) =>{
    const body = req.body;
    const name = req.body.name;
    if (body && name ){
     const data = {
      id: counter,
      name: name 
    };
    counter++;
    users.push(data);
    return res.sendStatus(201);
   }
    else {
      return res.sendStatus(400);
    }
};


module.exports = {
    getUsers,
    getUserByid,
    addUser
};