async function createTicket (req,res){
    const {title} = req.body;

    if(!title){
        return res.status(400).json({message : "Title required"})
    }

    return res.status(201).json({message : "Ticket created",
        title : title
    });
}

module.exports = createTicket;