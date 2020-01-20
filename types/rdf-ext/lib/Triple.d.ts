import { Triple } from 'rdf-js';
import { PropType } from './_PropType';
import DefaultGraphExt = require('./DefaultGraph');
import QuadExt = require('./Quad');
import NamedNodeExt = require('./NamedNode');
import BlankNodeExt = require('./BlankNode');
import VariableExt = require('./Variable');
import LiteralExt = require('./Literal');

interface TripleExt extends Triple, QuadExt {
  subject: NamedNodeExt | BlankNodeExt | VariableExt;
  predicate: NamedNodeExt | VariableExt;
  object: NamedNodeExt | LiteralExt | BlankNodeExt | VariableExt;
  graph: DefaultGraphExt;
  toJSON(): {
    subject: ReturnType<PropType<PropType<TripleExt, 'subject'>, 'toJSON'>>;
    predicate: ReturnType<PropType<PropType<TripleExt, 'predicate'>, 'toJSON'>>;
    object: ReturnType<PropType<PropType<TripleExt, 'object'>, 'toJSON'>>;
    graph: ReturnType<PropType<PropType<TripleExt, 'graph'>, 'toJSON'>>;
  };
}

export = TripleExt;
