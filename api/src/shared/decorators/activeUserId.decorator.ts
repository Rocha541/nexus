import {
    ExecutionContext,
    UnauthorizedException,
    createParamDecorator,
} from '@nestjs/common';

export const ActiveUserId = createParamDecorator<undefined>(
    (_data, context: ExecutionContext) => {
        const request = context.switchToHttp().getRequest();
        const userId = request.user?.sub;

        if (!userId) {
            throw new UnauthorizedException();
        }

        console.log({ userId });

        // eslint-disable-next-line @typescript-eslint/no-unsafe-return
        return userId;
    }
);
