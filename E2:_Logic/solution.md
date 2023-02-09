# Problem: 
    You are in the highway with your car (the green car), your friend calls you telling you that his car (a red car) has broken down, and you need to come and get him. However, there is a problem: you both don’t know in which way he is (should you go straightforward or go back in the highway to find him).
    Explain in the clearest way, how would you proceed to find your friend's car in a finite amount of time. Remember, all you can do is driving.
    Assumptions & limitations:
        ● You can’t leave the highway.
        ● You can’t call your friend.
        ● The highway is bidirectional, meaning you can move with your car in any direction you want.
        ● The highway is infinite, meaning if you move in the same direction, you will never get to an end.
        ● Your car has infinite gas to run until you find your friend.

# Solution:
  
the solution to find my friend's car on this infinite highway, mark the position of my car as **position 0** and follow the next process:<br>

1. **Choose a direction:** Pick either forward or backward and start driving in that direction.
2. **Drive in a set direction and turn back:** Drive for a fixed amount of time and speed for a distance X. Then, turn around and drive back the same distance until reaching position 0.
3. **Alternate directions:** Repeat step 3, but this time drive in the opposite direction and turn back after reaching same distance X.
4. **Increase the distance:** Increase the time to cover more distance X by a fixed amount.
5. **Repeat:** Keep repeating steps 2 to 4 until find my friend's car.<br>

By following these steps, i will eventually find the car in a finite amount of time by covering more ground with each iteration.
