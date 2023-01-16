/* eslint-disable prettier/prettier */
import { Controller, Get } from '@nestjs/common';
import { PrismaService } from 'nestjs-prisma';
import comments from '../../comments.json';

@Controller('/comments')
export class CommentController {
  constructor(private repository: PrismaService) {}

  @Get()
  async get() {

    // Em primeiro momento poderíamos fazer um algoritmo filtrando a data de postagem
    // dos comentários para realizar a persistência sem 
    let values = '';
    let counter = 0;

    const commentsExist = await this.repository.comments.findFirst()

    if (commentsExist) {
      return await this.repository.comments.findMany()
    }

    while (counter < 100) {
      const currentComent = comments[counter];
      values += ` ("${currentComent.id}", "${currentComent.content}"),`;
      counter++;
    }

    const formatedComments = this.replaceLastCaracter(values)

    try {
      await this.repository.$queryRawUnsafe("INSERT INTO comments (id, content) VALUES" + formatedComments);
    } catch (err) {
      console.log(err)
    }

    return await this.repository.comments.findMany()
  }

  private replaceLastCaracter(comments: string) {
    const transformArray = [...comments];
    const lastLength = comments.length - 1;
    transformArray[lastLength] = ";"
    const trasformString = transformArray.join('')
    return trasformString;
  }
}
