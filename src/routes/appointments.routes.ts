import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointment';
import AppointmentsRepository from '../repositories/AppointmentsRepository';

const appointmentsRouter = Router();
const appointmentsRepository = new AppointmentsRepository();


appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  const parsedDate = startOfHour(parseISO(date));

  if (findAppointmentInSameDate) {
    return response
    .status(400)
    .json({ message: 'This appointment already booked' });
  }

  const appointment = appointmentsRepository.create(provider, parsedDate)

  return response.json(appointment);
});

export default appointmentsRouter;
