export type AgentRequest = {
  message: string;
  user_id: string;
  conversation_id?: string
}

export type AgentResponse = {
  response: string,
  source_agent_response: string,
  agent_workflow: Array<AgentWork>
}

export type AgentWork = {
  agent: string,
  decision?: string
}