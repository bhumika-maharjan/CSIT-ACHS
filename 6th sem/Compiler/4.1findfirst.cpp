#include <iostream>
#include <map>
#include <set>
#include <vector>

using namespace std;

// Function to add an element to a set and return true if the element was added
bool add_to_set(set<char> &s, char c) {
    if (s.find(c) == s.end()) {
        s.insert(c);
        return true;
    }
    return false;
}

// Function to calculate the FIRST sets for the given grammar
void calculate_first(map<char, vector<string>> &grammar, map<char, set<char>> &first) {
    bool changed = true;
    while (changed) {
        changed = false;
        for (auto &production : grammar) {
            char non_terminal = production.first;
            for (string rhs : production.second) {
                for (char symbol : rhs) {
                    if (isupper(symbol)) { // Non-terminal
                        for (char c : first[symbol]) {
                            if (add_to_set(first[non_terminal], c)) {
                                changed = true;
                            }
                        }
                        if (first[symbol].find('e') == first[symbol].end()) {
                            break;
                        }
                    } else { // Terminal
                        if (add_to_set(first[non_terminal], symbol)) {
                            changed = true;
                        }
                        break;
                    }
                }
            }
        }
    }
}

// Function to print the FIRST sets
void print_first(map<char, set<char>> &first) {
    for (auto &f : first) {
        cout << "FIRST(" << f.first << ") = { ";
        for (char c : f.second) {
            cout << c << " ";
        }
        cout << "}" << endl;
    }
}

int main() {
    // Define the grammar
    map<char, vector<string>> grammar;
    grammar['S'] = {"L+R", "R"};
    grammar['L'] = {"*R", "a"};
    grammar['R'] = {"L"};

    // Initialize the FIRST sets
    map<char, set<char>> first;
    for (auto &production : grammar) {
        first[production.first] = set<char>();
    }

    // Calculate the FIRST sets
    calculate_first(grammar, first);

    // Print the FIRST sets
    print_first(first);

    return 0;
}

