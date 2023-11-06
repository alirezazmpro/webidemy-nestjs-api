import {
  Controller,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  Query,
} from '@nestjs/common';

import { SearchCourseQueryDTO } from '../dtos/home.dto';
import { CourseService } from '../services/course.service';

@Controller({
  path: 'courses',
  version: '1',
})
export class CourseController {
  constructor(private courseService: CourseService) {}

  @HttpCode(HttpStatus.OK)
  @Get()
  async Index() {
    return {
      status: 'success',
      courses: await this.courseService.Index(),
    };
  }
  // @HttpCode(HttpStatus.OK)
  // @Get('filter')
  // async FilterCurse(@Query() query: SearchCourseQueryDTO) {
  //   return await this.courseService.filter(query);
  // }
  // @HttpCode(HttpStatus.OK)
  // @Get('getCategories')
  // async GetCategory() {
  //   return await this.courseService.getCategorties();
  // }

  @HttpCode(HttpStatus.OK)
  @Get(':slug')
  async signleCourse(@Param('slug') slug: string) {
    return {
      status: 'success',
      course: await this.courseService.GetsingleCourseBySlug(slug),
    };
  }
}
