import { Controller, Get } from '@nestjs/common';

@Controller('tweets')
export class TweetController {
    @Get()
    getTweet(){
        return "Tweet Controller";
    }
}
