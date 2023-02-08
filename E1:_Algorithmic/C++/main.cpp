#include <iostream>
#include <string>


class Warlock {
    
    private: 
        int range;
        Warlock(){};
        void printWord(std::string msg)
        {
            std::cout << msg;
        }

    public:
        Warlock(int number) : range(number)
        {
            if (number < 0)
            {
                std::cout << "Out of Range" << std::endl;
                return ;
            }
            // std::cout << " range " << range << std::  endl;
        }
        ~Warlock(){};
        void process(){
            bool marked = false;
            for (int i = 1; i <= range; i++)
            {
                std::string str = "";

                marked = false;
                if (i % 3 == 0)
                {
                    str += "Hello";
                    marked = true;
                }
                if (i % 5 == 0)
                {
                    str += (marked ?  " " : "");
                    str += "World";
                    marked = true;
                }
                if (i % 7 == 0)
                {
                    str += (marked ?  " " : "");
                    str += "Yoo";
                    marked = true;
                }

                if (!marked)
                    str += std::to_string(i);
                    // std::cout << i;

                if ( i != range)
                    str +=  ", ";
                else
                    str += ".\n";

                std::cout << str;
            }
        }
};

int main()
{
    Warlock w(100);
    w.process();
    return 0;   
}