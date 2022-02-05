import { response } from "express";
import Appointment from "../models/Appointment";
import AppointmentsRepository from "../repositories/AppointmentsRepository";

interface Request {
  provider;
  date: Date;
}
class CreateAppointmentService {
  public execute({ provider, date }:Request): Appointment {
    const appointmentDate = startOfHour(date);

    const findAppointmentInSameDate = apointmentRepository.findByDate(
      parsedDate,
    );

    if(findAppointmentInSameDate) {
      return response
        .status(400)
        .json({message: 'This appointment is already booked'})
    }
    const appointment = appoitmentRepository.create({
      provider,
      date: appointmentDate,
    });

    return appointment;
  }
}

export default CreateAppointmentService;
