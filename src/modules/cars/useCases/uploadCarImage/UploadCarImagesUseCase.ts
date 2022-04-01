import { inject, injectable } from "tsyringe";

import { CarsImagesRepository } from "@modules/cars/infra/typeorm/repositories/CarsImageRepository";

interface IRequest {
  car_id: string;
  images_name: string[];
}

@injectable()
class UploadCarImagesUseCase {
  constructor(
    @inject("CarsImageRepository")
    private carsImageRepository: CarsImagesRepository
  ) {}
  async execute({ car_id, images_name }: IRequest) {
    images_name.map(async (image) => {
      await this.carsImageRepository.create(car_id, image);
    });
  }
}

export { UploadCarImagesUseCase };
