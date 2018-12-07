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
}