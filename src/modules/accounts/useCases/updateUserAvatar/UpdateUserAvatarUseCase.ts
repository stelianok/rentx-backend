import { inject, injectable } from "tsyringe";

import { deleteFile } from "@utils/file";
import { IUsersRepository } from "@modules/accounts/repositories/IUsersRepository";

interface IRequest {
  user_id: string;
  avatar_file: string;
}

@injectable()
class UpdateUserAvatarUseCase {

  constructor(
    @inject("UsersRepository")
    private usersRepository: IUsersRepository
  ) { }

  async execute({ user_id, avatar_file }: IRequest): Promise<void> {
    const user = await this.usersRepository.findById(user_id);

    user.avatar = avatar_file;

    if (user) {
      await deleteFile(`./tmp/avatar/${user.avatar}`);
    }

    await this.usersRepository.create(user);
  }
}

export { UpdateUserAvatarUseCase };