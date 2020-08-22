import {Response, Request} from 'express'
import createUser from './services/CreateUser'

export function helloWorld(request: Request, response:Response){
    const user = createUser({
        email: 'bittencourtcrb@gmail.com', 
        password: '123456',
        techs: ['Node.js', 'ReactJS', 'React Native', {
            title: 'Javascript',
            experience: 75,            
        }], 
    })

    return response.json({message: `Hello World, ${user.name}`})
}