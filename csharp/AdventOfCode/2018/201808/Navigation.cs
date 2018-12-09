using System;
using System.Collections.Generic;
using System.Linq;

namespace AdventOfCode
{
    public class NavigationNode
    {
        private Queue<int> _input;
        public List<NavigationNode> ChildNodes { get; set; }
        public List<int> Metadata { get; set; }

        public NavigationNode() : this(new int[0], null) { }
        public NavigationNode(IEnumerable<int> input) : this(input, null) { }
        public NavigationNode(IEnumerable<int> input, NavigationNode parentNode)
        {
            ChildNodes = new List<NavigationNode>();
            Metadata = new List<int>();

            if (input.Any())
            {
                _input = new Queue<int>(input);
                if (parentNode == null)
                {
                    ParseInput();
                }
            }
        }

        protected Queue<int> ParseInput()
        {
            int childNodes = _input.Dequeue();
            int metadataNodes = _input.Dequeue();

            for (int i = 0; i < childNodes; i++)
            {
                NavigationNode newNode = new NavigationNode(_input, this);
                _input = newNode.ParseInput();
                ChildNodes.Add(newNode);
            }

            for (int i = 0; i < metadataNodes; i++)
            {
                Metadata.Add(_input.Dequeue());
            }

            return _input;
        }

        public int GetMetadataSum()
        {
            return Metadata.Sum()+ ChildNodes.Sum(n => n.GetMetadataSum());
        }
    }
}
