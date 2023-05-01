import { Controller } from '@nestjs/common';
import { StagingService } from './staging.service';

@Controller('staging')
export class StagingController {
  constructor(private readonly stagingService: StagingService) {}
}
