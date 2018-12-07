package dev.jeffrosenberg.adventofcode.year_2018.day_201807;

import org.jgrapht.*;
import org.jgrapht.alg.connectivity.*;
import org.jgrapht.alg.interfaces.ShortestPathAlgorithm.*;
import org.jgrapht.alg.interfaces.*;
import org.jgrapht.alg.shortestpath.*;
import org.jgrapht.graph.*;
import org.jgrapht.traverse.BreadthFirstIterator;
import org.jgrapht.traverse.GraphIterator;
import org.jgrapht.traverse.TopologicalOrderIterator;
import sun.reflect.generics.reflectiveObjects.NotImplementedException;

import java.util.Comparator;
import java.util.regex.Matcher;
import java.util.regex.Pattern;

public class Instructions {
  private DirectedAcyclicGraph<String, DefaultEdge> steps =
          new DirectedAcyclicGraph<String, DefaultEdge>(DefaultEdge.class);

  public DirectedAcyclicGraph<String, DefaultEdge> getSteps() {
    return steps;
  }

  public void parseInstruction(String instruction) {
    // Use a simple regex to extract the vertices
    String regex = "Step ([A-Z]) must be finished before step ([A-Z]) can begin\\.";
    Pattern pattern = Pattern.compile(regex, Pattern.CASE_INSENSITIVE);
    Matcher matcher = pattern.matcher(instruction);
    matcher.find();
    String vertex1 = matcher.group(1);
    String vertex2 = matcher.group(2);

    // Create vertices and edges in the DAG
    if (!steps.containsVertex(vertex1)) {
      steps.addVertex(vertex1);
    }
    if (!steps.containsVertex(vertex2)) {
      steps.addVertex(vertex2);
    }
    DefaultEdge edge = new DefaultEdge();
    if (!steps.containsEdge(vertex1, vertex2)) {
      steps.addEdge(vertex1, vertex2);
    }
  }

  public String getOutput() {
    // Use a TopologicalOrderIterator to traverse the DAG in order
    // In case of a tie, use a standard string comparator
    TopologicalOrderIterator<String, DefaultEdge> iterator =
            new TopologicalOrderIterator<>(steps, Comparator.comparing((String x) -> x));

    // Traverse the DAG and store each vertex to a StringBuilder
    // to output once traversal is completed
    StringBuilder sb = new StringBuilder();
    while (iterator.hasNext()) {
      sb.append(iterator.next());
    }

    return sb.toString();
  }
}