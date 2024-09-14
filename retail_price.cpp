#include <iostream>
#include <iomanip>

extern "C" {
    double calculateRetail(double wholesaleCost, double markupPercentage) {
        return wholesaleCost + (wholesaleCost * (markupPercentage / 100));
    }
}