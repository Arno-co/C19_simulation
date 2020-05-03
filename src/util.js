export const Util = {
   // Return a randomly oriented vector with the given length.
   randomVec(length) {
      const deg = 2 * Math.PI * Math.random();
      return Util.scale([Math.sin(deg), Math.cos(deg)], length);
   },
   // Scale the length of a vector by the given amount.
   scale(vec, m) {
      return [vec[0] * m, vec[1] * m];
   },

   dist(pos1, pos2) {
      return Math.sqrt(
         Math.pow(pos1[0] - pos2[0], 2) + Math.pow(pos1[1] - pos2[1], 2)
      )
   },
   
   randomIntRange(min, max) {
      return Math.floor(Math.random() * (max - min + 1) + min);
   },

   rotate(velocity, angle) {
      const rotatedVelocities = {
         x: velocity[0] * Math.cos(angle) - velocity[1] * Math.sin(angle),
         y: velocity[0] * Math.sin(angle) + velocity[1] * Math.cos(angle)
      }
      return rotatedVelocities;
   },

   resolveCollision(pers, otherPers) {

      const xVelDiff = pers.vel[0] - otherPers.vel[0];
      const yVelDiff = pers.vel[1] - otherPers.vel[1];


      const xDist = otherPers.pos[0] - pers.pos[0];
      const yDist = otherPers.pos[1] - pers.pos[1];

      // Prevent accidental overlap of pers
      if (xVelDiff * xDist + yVelDiff * yDist >= 0) {

         pers.vel = pers.changeDir(pers.vel);
         otherPers.vel = otherPers.changeDir(otherPers.vel);
         
      }
   }
   
}