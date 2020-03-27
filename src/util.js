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

         // Grab angle between the two colliding pers
         const angle = -Math.atan2(otherPers.pos[1] - pers.pos[1], otherPers.pos[0] - pers.pos[0]);

         // Store mass in var for better readability in collision equation
         const m1 = pers.mass;
         const m2 = otherPers.mass;

         // vel before equation
         const u1 = Util.rotate(pers.vel, angle);
         const u2 = Util.rotate(otherPers.vel, angle);

         // vel after 1d collision equation
         // const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
         // const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };
         const v1 = [u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), u1.y];
         const v2 = [u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), u2.y];

         // Final vel after rotating axis back to original location
         const vFinal1 = Util.rotate(v1, -angle);
         const vFinal2 = Util.rotate(v2, -angle);

         // Swap pers velocities for realistic bounce effect
         pers.vel[0] = vFinal1.x;
         pers.vel[1] = vFinal1.y;

         otherPers.vel[0] = vFinal2.x;
         otherPers.vel[1] = vFinal2.y;
      }
   }

   // resolveCollision(pers, otherPers) {
   //    const xVelDiff = pers.vel[0] - otherPers.vel[0];
   //    const yVelDiff = pers.vel[1] - otherPers.vel[1];

   //    const xDist = otherPers.pos[0] - pers.pos[0];
   //    const yDist = otherPers.pos[1] - pers.pos[1];

   //    // Prevent accidental overlap of pers
   //    if (xVelDiff * xDist + yVelDiff * yDist >= 0) {

   //       // Grab angle between the two colliding pers
   //       const angle = -Math.atan2(otherPers.pos[1] - pers.pos[1], otherPers.pos[0] - pers.pos[0]);

   //       // Store mass in var for better readability in collision equation
   //       const m1 = pers.mass;
   //       const m2 = otherPers.mass;

   //       if (pers.consciousCitizen === true) {
   //          // vel before equation
   //          const u1 = Util.rotate(pers.vel, angle);
   //          const u2 = Util.rotate(otherPers.vel, angle);

   //          // vel after 1d collision equation
   //          const v1 = [u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), u1.y];
   //          const v2 = [u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), u2.y];

   //          // Final vel after rotating axis back to original location
   //          const vFinal1 = Util.rotate(v1, -angle);
   //          const vFinal2 = Util.rotate(v2, -angle);

   //          // Swap pers velocities for realistic bounce effect
   //          // pers.vel[0] = vFinal1.x;
   //          // pers.vel[1] = vFinal1.y;
   //          pers.vel[0] = 0;
   //          pers.vel[1] = 0;

   //          otherPers.vel[0] = vFinal2.x;
   //          otherPers.vel[1] = vFinal2.y;

   //       } else if (otherPers.consciousCitizen === true){
   //          // vel before equation
   //          const u1 = Util.rotate(pers.vel, angle);
   //          const u2 = Util.rotate(otherPers.vel, angle);

   //          // vel after 1d collision equation
  
   //          const v1 = [u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), u1.y];
   //          const v2 = [u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), u2.y];

   //          // Final vel after rotating axis back to original location
   //          const vFinal1 = Util.rotate(v1, -angle);
   //          // const vFinal2 = Util.rotate(v2, -angle);

   //          // Swap pers velocities for realistic bounce effect
   //          pers.vel[0] = vFinal1.x;
   //          pers.vel[1] = vFinal1.y;

   //          // otherPers.vel[0] = vFinal2.x;
   //          // otherPers.vel[1] = vFinal2.y;
   //          otherPers.vel[0] = 0;
   //          otherPers.vel[1] = 0;
   //       } else {
   //          // vel before equation
   //          const u1 = Util.rotate(pers.vel, angle);
   //          const u2 = Util.rotate(otherPers.vel, angle);

   //          // vel after 1d collision equation
   //          // const v1 = { x: u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), y: u1.y };
   //          // const v2 = { x: u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), y: u2.y };
   //          const v1 = [u1.x * (m1 - m2) / (m1 + m2) + u2.x * 2 * m2 / (m1 + m2), u1.y];
   //          const v2 = [u2.x * (m1 - m2) / (m1 + m2) + u1.x * 2 * m2 / (m1 + m2), u2.y];

   //          // Final vel after rotating axis back to original location
   //          const vFinal1 = Util.rotate(v1, -angle);
   //          const vFinal2 = Util.rotate(v2, -angle);

   //          // Swap pers velocities for realistic bounce effect
   //          pers.vel[0] = vFinal1.x;
   //          pers.vel[1] = vFinal1.y;

   //          otherPers.vel[0] = vFinal2.x;
   //          otherPers.vel[1] = vFinal2.y;
   //       }
   //    }
   // }
}