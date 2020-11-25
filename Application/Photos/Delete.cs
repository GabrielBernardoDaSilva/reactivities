using System;
using System.Linq;
using System.Net;
using System.Threading;
using System.Threading.Tasks;
using Application.Errors;
using Application.Interfaces;
using MediatR;
using Microsoft.EntityFrameworkCore;
using Persistence;

namespace Application.Photos
{
    public class Delete
    {
        public class Command : IRequest
        {

            public string Id { get; set; }

        }

        public class Handler : IRequestHandler<Command>
        {
            private readonly DataContext _context;
            private readonly IUserAccessor _userAccessor;
            private readonly IPhotoAccessor _photoAccessor;
            public Handler(DataContext context, IUserAccessor userAccessor, IPhotoAccessor photoAccessor)
            {
                _photoAccessor = photoAccessor;
                _userAccessor = userAccessor;
                _context = context;
            }

            public async Task<Unit> Handle(Command request, CancellationToken cancellationToken)
            {

                var user = await _context.Users.SingleOrDefaultAsync(x => x.UserName == _userAccessor.GetCurrentUserName());

                var photo = user.Photos.FirstOrDefault(x => x.Id == request.Id);

                if (photo is null)
                    throw new RestException(HttpStatusCode.NotFound, new {Photos = "Not Found"});

                if (photo.IsMain)
                    throw new RestException(HttpStatusCode.BadRequest, new {Photos = "You cannot delete your main photo"});

                var result = _photoAccessor.DeletePhoto(photo.Id);

                if (result is null)
                    throw new Exception("Problem in delete the photo");

                user.Photos.Remove(photo);

                var success = await _context.SaveChangesAsync() > 0;

                if (success) return Unit.Value;

                throw new Exception("Problem in save changes");
            }
        }
    }
}