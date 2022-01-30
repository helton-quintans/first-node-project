import { Router } from 'express';

const appointmentsRouter = Router();

const appointments = [];

appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;
  const appointment = {
    provider,
    date,
  };
  return response.json({ message: 'Hello' });
});

export default appointmentsRouter;
