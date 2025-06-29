#include <iostream>
#include <map>
#include <set>
#include <vector>
#include <algorithm>

using namespace std;

// Function to add an element to a set and return true if the element was added
bool add_to_set(set<char> &s, char c) {
    if (s.find(c) == s.end()) {
        s.insert(c);
        return true;
    }
    return false;
}

// Function to calculate the FIRST sets
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

// Function to calculate the FOLLOW sets
void calculate_follow(map<char, vector<string>> &grammar, map<char, set<char>> &first, map<char, set<char>> &follow, char start_symbol) {
    follow[start_symbol].insert('$'); // Add end marker to FOLLOW(start symbol)
    bool changed = true;
    while (changed) {
        changed = false;
        for (auto &production : grammar) {
            char non_terminal = production.first;
            for (string rhs : production.second) { 
                for (size_t i = 0; i < rhs.size(); i++) {
                    char symbol = rhs[i];
                    if (isupper(symbol)) { // Non-terminal
                        if (i + 1 < rhs.size()) {
                            char next_symbol = rhs[i + 1];
                            if (isupper(next_symbol)) {
                                for (char c : first[next_symbol]) {
                                    if (c != 'e') {
                                        if (add_to_set(follow[symbol], c)) {
                                            changed = true;
                                        }
                                    }
                                }
                                if (first[next_symbol].find('e') != first[next_symbol].end()) {
                                    for (char c : follow[non_terminal]) {
                                        if (add_to_set(follow[symbol], c)) {
                                            changed = true;
                                        }
                                    }
                                }
                            } else {
                                if (add_to_set(follow[symbol], next_symbol)) {
                                    changed = true;
                                }
                            }
                        } else {
                            for (char c : follow[non_terminal]) {
                                if (add_to_set(follow[symbol], c)) {
                                    changed = true;
                                }
                            }
                        }
                    }
                }
            }
        }
    }
}

// Function to print the FOLLOW sets
void print_follow(map<char, set<char>> &follow) {
    for (auto &f : follow) {
        cout << "FOLLOW(" << f.first << ") = { ";
        for (char c : f.second) {
            cout << c << " ";
        }
        cout << "}" << endl;
    }
}

int main() {
    // Define the grammar
    map<char, vector<string>> grammar;
    grammar['R'] = {"aS", "(R)S"};
    grammar['S'] = {"+RS", "aRS", "as"};

    // Initialize the FIRST and FOLLOW sets
    map<char, set<char>> first;
    map<char, set<char>> follow;
    for (auto &production : grammar) {
        first[production.first] = set<char>();
        follow[production.first] = set<char>();
    }

    // Calculate the FIRST sets
    calculate_first(grammar, first);

    // Calculate the FOLLOW sets
    char start_symbol = 'R'; // Assuming 'R' is the start symbol
    calculate_follow(grammar, first, follow, start_symbol);

    // Print the FOLLOW sets
    print_follow(follow);

    return 0;
}

