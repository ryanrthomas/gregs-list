const router = require('express').Router();

let jobs = [{
    jobTitle: "musician",
    company: "Royal Caribbean International",
    hours: 40,
    wage: 2600,
    description: "This was my previous job."
}, {
    jobTitle: "cashier",
    company: "Fred Meyer",
    hours: 25,
    wage: 140,
    description: "This is my current job."
}]

// GetAllJobs
router.get('', (req, res, next) => {
    res.status(200).send(jobs)
})

// Get one by Id (index)
router.get('/:id', (req, res, next) => {
    let job = jobs[req.params.id]
    if (!job) {
        return res.status(400).send(`<h1>There is no job at that ID.</h1>`)
    }
    res.status(200).send(job)
})

router.post('', (req, res, next) => {
    // Request body is the object sent from the client
    let newJob = request.body;
    jobs.push(newJob)
    res.status(201).send(newJob)
})

router.delete('/:id', (req,res,next)=> {
    if (req.params.id > -1 && req.params.id < jobs.length) {
        jobs.splice(req.params.id, 1)
        res.status(400).send('Deleted job!')
    }
    res.status(400).send(`<h1>There is no job at that ID.</h1>`)
})

module.exports = router