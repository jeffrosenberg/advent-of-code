package dev.jeffrosenberg.adventofcode.year_2018.day_201807;

import org.jgrapht.*;
import org.jgrapht.alg.connectivity.*;
import org.jgrapht.alg.interfaces.ShortestPathAlgorithm.*;
import org.jgrapht.alg.interfaces.*;
import org.jgrapht.alg.shortestpath.*;
import org.jgrapht.graph.*;

import java.util.*;

public class Instructions {
  private DirectedAcyclicGraph<String, DefaultEdge> steps =
          new DirectedAcyclicGraph<String, DefaultEdge>(DefaultEdge.class);

  public DirectedAcyclicGraph<String, DefaultEdge> getSteps() {
    return steps;
  }

  public void parseInstruction(String instruction) {
    // Not implemented
  }
}