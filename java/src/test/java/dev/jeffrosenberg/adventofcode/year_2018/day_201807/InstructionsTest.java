package dev.jeffrosenberg.adventofcode.year_2018.day_201807;

import static org.junit.Assert.assertEquals;
import org.junit.Rule;
import org.junit.Test;
import org.junit.rules.ExpectedException;
import org.jgrapht.*;
import org.jgrapht.graph.*;

import dev.jeffrosenberg.adventofcode.year_2018.day_201807.Instructions;

public class InstructionsTest {
  @Rule
  public final ExpectedException exception = ExpectedException.none();

  @Test
  public void InstructionsStep1ProducesGraphWithVerticesAAndC() {
    Instructions instructions = new Instructions();
    instructions.parseInstruction("Step C must be finished before step A can begin.");
    DirectedAcyclicGraph result = instructions.getSteps();

    DirectedAcyclicGraph expected = new DirectedAcyclicGraph<String, DefaultEdge>(DefaultEdge.class);
    expected.addVertex("C");
    expected.addVertex("A");
    expected.addEdge("C", "A");

    assertEquals(expected.vertexSet().toString(), result.vertexSet().toString());
    assertEquals(expected.edgeSet().toString(), result.edgeSet().toString());
  }

  @Test
  public void InstructionsStep3ProducesGraphWithVerticesAAndB() {
    Instructions instructions = new Instructions();
    instructions.parseInstruction("Step A must be finished before step B can begin.");
    DirectedAcyclicGraph result = instructions.getSteps();

    DirectedAcyclicGraph expected = new DirectedAcyclicGraph<String, DefaultEdge>(DefaultEdge.class);
    expected.addVertex("A");
    expected.addVertex("B");
    expected.addEdge("A", "B");

    assertEquals(expected.vertexSet().toString(), result.vertexSet().toString());
    assertEquals(expected.edgeSet().toString(), result.edgeSet().toString());
  }

  @Test
  public void ExampleInstructionsProduceCorrectGraph() {
    Instructions instructions = new Instructions();
    instructions.parseInstruction("Step C must be finished before step A can begin.");
    instructions.parseInstruction("Step C must be finished before step F can begin.");
    instructions.parseInstruction("Step A must be finished before step B can begin.");
    instructions.parseInstruction("Step A must be finished before step D can begin.");
    instructions.parseInstruction("Step B must be finished before step E can begin.");
    instructions.parseInstruction("Step D must be finished before step E can begin.");
    instructions.parseInstruction("Step F must be finished before step E can begin.");
    DirectedAcyclicGraph result = instructions.getSteps();

    DirectedAcyclicGraph expected = new DirectedAcyclicGraph<String, DefaultEdge>(DefaultEdge.class);
    expected.addVertex("C");
    expected.addVertex("A");
    expected.addVertex("F");
    expected.addVertex("B");
    expected.addVertex("D");
    expected.addVertex("E");
    expected.addEdge("C", "A");
    expected.addEdge("C", "F");
    expected.addEdge("A", "B");
    expected.addEdge("A", "D");
    expected.addEdge("B", "E");
    expected.addEdge("D", "E");
    expected.addEdge("F", "E");

    assertEquals(expected.vertexSet().toString(), result.vertexSet().toString());
    assertEquals(expected.edgeSet().toString(), result.edgeSet().toString());
  }

  @Test
  public void ExampleInstructionsProduceCorrectOutput() {
    Instructions instructions = new Instructions();
    instructions.parseInstruction("Step C must be finished before step A can begin.");
    instructions.parseInstruction("Step C must be finished before step F can begin.");
    instructions.parseInstruction("Step A must be finished before step B can begin.");
    instructions.parseInstruction("Step A must be finished before step D can begin.");
    instructions.parseInstruction("Step B must be finished before step E can begin.");
    instructions.parseInstruction("Step D must be finished before step E can begin.");
    instructions.parseInstruction("Step F must be finished before step E can begin.");

    String expected = "CABDFE";
    String result = instructions.getOutput();

    assertEquals(expected, result);
  }
}