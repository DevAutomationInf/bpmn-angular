import {Component, ElementRef, OnDestroy, OnInit, ViewChild} from '@angular/core';
import Modeler from "bpmn-js/lib/Modeler";
import CustomRules from "./custom/custom-rules";
import {CustomRenderer} from "./custom/custom-renderer";
import {ModdleElement} from "bpmn-js/lib/model/Types";
import { MODDLE_EXTENSIONS, getUpdatedExtensions, updateProperties } from './extension.util';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {
  @ViewChild('bpmnModeler', {static: true}) bpmnModeler!: ElementRef<HTMLDivElement>;
  title = 'bpmn-angular';
  modeler!: any;
  canvas!: { zoom: (zoomValue?: number | string, mode?: string) => number; resized: () => void };
  xml = `<?xml version="1.0" encoding="UTF-8" standalone="no"?><bpmn:definitions xmlns:bpmn="http://www.omg.org/spec/BPMN/20100524/MODEL" xmlns:bioc="http://bpmn.io/schema/bpmn/biocolor/1.0" xmlns:bpmndi="http://www.omg.org/spec/BPMN/20100524/DI" xmlns:color="http://www.omg.org/spec/BPMN/non-normative/color/1.0" xmlns:dc="http://www.omg.org/spec/DD/20100524/DC" xmlns:di="http://www.omg.org/spec/DD/20100524/DI" xmlns:ipi="http://www.infor.com/ipi" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" id="Definitions_1" name="Border Link Inter" targetNamespace="http://bpmn.io/schema/bpmn"><bpmn:collaboration id="Collaboration_1p64v2h"><bpmn:extensionElements><ipi:attribute name="new_cust2" value="true"/><ipi:attribute name="aaaa" value="&quot;&quot;"/><ipi:attribute name="processownerv1" value="&quot;&quot;"/><ipi:attribute name="continent" value="&quot;&quot;"/><ipi:attribute name="model" value="&quot;&quot;"/><ipi:attribute name="new_cust4" value="1"/><ipi:attribute name="prs00003" value="&quot;&quot;"/><ipi:attribute name="prs00002" value="&quot;&quot;"/><ipi:attribute name="new_cust" value="&quot;&quot;"/><ipi:attribute name="rt24v11jiraipit200custattr1" value="&quot;&quot;"/><ipi:attribute name="vittorioattribute" value="&quot;&quot;"/><ipi:attribute name="spacef" value="&quot;&quot;"/><ipi:attribute name="gru" value="&quot;&quot;"/><ipi:attribute name="name" value="{&quot;id&quot;:566743,&quot;uuid&quot;:&quot;0672b525-b445-71a1-b800-eddc30a726ce&quot;,&quot;type&quot;:&quot;registry&quot;,&quot;name&quot;:&quot;Border Link Inter_671e362e566042639c4368627b7f0a0b&quot;,&quot;title&quot;:&quot;Border Link Inter&quot;,&quot;autoGenerated&quot;:true,&quot;translationLanguage&quot;:&quot;en-US&quot;,&quot;inforStandard&quot;:false}"/></bpmn:extensionElements><bpmn:participant id="Participant_0z5mlq7" name="pool 1" processRef="Process_1"><bpmn:documentation/><bpmn:extensionElements><ipi:attribute name="new_cust4" value="1"/><ipi:attribute name="prs00003" value="&quot;&quot;"/><ipi:attribute name="prs00002" value="&quot;&quot;"/><ipi:attribute name="new_cust" value="&quot;&quot;"/><ipi:attribute name="rt24v11jiraipit200custattr1" value="&quot;&quot;"/><ipi:attribute name="vittorioattribute" value="&quot;&quot;"/><ipi:attribute name="spacef" value="&quot;&quot;"/><ipi:attribute name="gru" value="&quot;&quot;"/><ipi:attribute name="name" value="{&quot;id&quot;:569339,&quot;uuid&quot;:&quot;067457ef-1965-7e2c-b400-0076ce765727&quot;,&quot;type&quot;:&quot;registry&quot;,&quot;name&quot;:&quot;pool 1_7aa3da68981c428fa1a619862fa15f93&quot;,&quot;title&quot;:&quot;pool 1&quot;,&quot;autoGenerated&quot;:true,&quot;translationLanguage&quot;:&quot;en-US&quot;,&quot;inforStandard&quot;:false}"/></bpmn:extensionElements></bpmn:participant><bpmn:participant id="Participant_1hdd1r7" name="pool 2" processRef="Process_1thst87"><bpmn:documentation/><bpmn:extensionElements><ipi:attribute name="new_cust4" value="1"/><ipi:attribute name="prs00003" value="&quot;&quot;"/><ipi:attribute name="prs00002" value="&quot;&quot;"/><ipi:attribute name="new_cust" value="&quot;&quot;"/><ipi:attribute name="rt24v11jiraipit200custattr1" value="&quot;&quot;"/><ipi:attribute name="vittorioattribute" value="&quot;&quot;"/><ipi:attribute name="spacef" value="&quot;&quot;"/><ipi:attribute name="gru" value="&quot;&quot;"/><ipi:attribute name="sktest" value="&quot;&quot;"/><ipi:attribute name="name" value="{&quot;id&quot;:569340,&quot;uuid&quot;:&quot;067457ef-19da-7b4c-a000-87cffccb5bd9&quot;,&quot;type&quot;:&quot;registry&quot;,&quot;name&quot;:&quot;pool 2_42b55cc7440c4c548d88c97777b931d1&quot;,&quot;title&quot;:&quot;pool 2&quot;,&quot;autoGenerated&quot;:true,&quot;translationLanguage&quot;:&quot;en-US&quot;,&quot;inforStandard&quot;:false}"/></bpmn:extensionElements></bpmn:participant><bpmn:group categoryValueRef="CategoryValue_10ge77s" id="Group_0l7nxmm" name="G1"><bpmn:documentation/><bpmn:extensionElements><ipi:attribute name="new_cust4" value="1"/><ipi:attribute name="prs00003" value="&quot;&quot;"/><ipi:attribute name="prs00002" value="&quot;&quot;"/><ipi:attribute name="new_cust" value="&quot;&quot;"/><ipi:attribute name="rt24v11jiraipit200custattr1" value="&quot;&quot;"/><ipi:attribute name="vittorioattribute" value="&quot;&quot;"/><ipi:attribute name="spacef" value="&quot;&quot;"/><ipi:attribute name="gru" value="&quot;&quot;"/><ipi:attribute name="sktest" value="&quot;&quot;"/><ipi:attribute name="name" value="{&quot;id&quot;:569341,&quot;uuid&quot;:&quot;067457ef-1a19-7194-b400-676dbcc75385&quot;,&quot;type&quot;:&quot;registry&quot;,&quot;name&quot;:&quot;G1_85bfc2c7a591453d911b4606f88443f7&quot;,&quot;title&quot;:&quot;G1&quot;,&quot;autoGenerated&quot;:true,&quot;translationLanguage&quot;:&quot;en-US&quot;,&quot;inforStandard&quot;:false}"/></bpmn:extensionElements></bpmn:group></bpmn:collaboration><bpmn:process id="Process_1" isExecutable="false"><bpmn:laneSet id="LaneSet_13et3sv"><bpmn:lane id="Lane_1fk5zfy" name="lane 2"><bpmn:documentation/><bpmn:extensionElements><ipi:attribute name="new_cust4" value="1"/><ipi:attribute name="prs00003" value="&quot;&quot;"/><ipi:attribute name="prs00002" value="&quot;&quot;"/><ipi:attribute name="new_cust" value="&quot;&quot;"/><ipi:attribute name="rt24v11jiraipit200custattr1" value="&quot;&quot;"/><ipi:attribute name="vittorioattribute" value="&quot;&quot;"/><ipi:attribute name="spacef" value="&quot;&quot;"/><ipi:attribute name="gru" value="&quot;&quot;"/><ipi:attribute name="sktest" value="&quot;&quot;"/><ipi:attribute name="name" value="{&quot;id&quot;:569342,&quot;uuid&quot;:&quot;067457ef-1a2d-7675-a400-9d63cee73845&quot;,&quot;type&quot;:&quot;registry&quot;,&quot;name&quot;:&quot;lane 2_084ba01b0d924d2785326991dcb4aec2&quot;,&quot;title&quot;:&quot;lane 2&quot;,&quot;autoGenerated&quot;:true,&quot;translationLanguage&quot;:&quot;en-US&quot;,&quot;inforStandard&quot;:false}"/></bpmn:extensionElements></bpmn:lane><bpmn:lane id="Lane_09t5q0x" name="lane 1"><bpmn:documentation/><bpmn:extensionElements><ipi:attribute name="new_cust4" value="1"/><ipi:attribute name="prs00003" value="&quot;&quot;"/><ipi:attribute name="prs00002" value="&quot;&quot;"/><ipi:attribute name="new_cust" value="&quot;&quot;"/><ipi:attribute name="rt24v11jiraipit200custattr1" value="&quot;&quot;"/><ipi:attribute name="vittorioattribute" value="&quot;&quot;"/><ipi:attribute name="spacef" value="&quot;&quot;"/><ipi:attribute name="gru" value="&quot;&quot;"/><ipi:attribute name="sktest" value="&quot;&quot;"/><ipi:attribute name="name" value="{&quot;id&quot;:569343,&quot;uuid&quot;:&quot;067457ef-1a41-7321-ac00-1545068e92fc&quot;,&quot;type&quot;:&quot;registry&quot;,&quot;name&quot;:&quot;lane 1_6445bda9e1d64e3d9f65d45464aa10f0&quot;,&quot;title&quot;:&quot;lane 1&quot;,&quot;autoGenerated&quot;:true,&quot;translationLanguage&quot;:&quot;en-US&quot;,&quot;inforStandard&quot;:false}"/></bpmn:extensionElements><bpmn:flowNodeRef>Event_0pd7zpg</bpmn:flowNodeRef><bpmn:flowNodeRef>Event_0f4c2ej</bpmn:flowNodeRef><bpmn:flowNodeRef>Activity_1a4ehmg</bpmn:flowNodeRef><bpmn:flowNodeRef>Activity_0avahb9</bpmn:flowNodeRef></bpmn:lane></bpmn:laneSet><bpmn:intermediateCatchEvent id="Event_0pd7zpg" name="Throw event"><bpmn:documentation/><bpmn:extensionElements><ipi:attribute name="new_cust4" value="1"/><ipi:attribute name="prs00003" value="&quot;&quot;"/><ipi:attribute name="prs00002" value="&quot;&quot;"/><ipi:attribute name="new_cust" value="&quot;&quot;"/><ipi:attribute name="vittorioattribute" value="&quot;&quot;"/><ipi:attribute name="spacef" value="&quot;&quot;"/><ipi:attribute name="gru" value="&quot;&quot;"/><ipi:attribute name="name" value="{&quot;id&quot;:566970,&quot;uuid&quot;:&quot;0673ace8-8ae4-7d2c-bc00-b917568a1c9d&quot;,&quot;type&quot;:&quot;registry&quot;,&quot;name&quot;:&quot;Throw event_5dcde4d9cbb343a081ee983c1e5b9920&quot;,&quot;title&quot;:&quot;Throw event&quot;,&quot;autoGenerated&quot;:true,&quot;translationLanguage&quot;:&quot;en-US&quot;,&quot;inforStandard&quot;:false}"/></bpmn:extensionElements><bpmn:outgoing>Flow_0tuu0mh</bpmn:outgoing><bpmn:linkEventDefinition id="LinkEventDefinition_1tbwxxn" name=""><bpmn:extensionElements/></bpmn:linkEventDefinition></bpmn:intermediateCatchEvent><bpmn:intermediateThrowEvent id="Event_0f4c2ej" name="Catch Event  "><bpmn:documentation/><bpmn:extensionElements><ipi:attribute name="new_cust4" value="1"/><ipi:attribute name="prs00003" value="&quot;&quot;"/><ipi:attribute name="prs00002" value="&quot;&quot;"/><ipi:attribute name="new_cust" value="&quot;&quot;"/><ipi:attribute name="vittorioattribute" value="&quot;&quot;"/><ipi:attribute name="spacef" value="&quot;&quot;"/><ipi:attribute name="gru" value="&quot;&quot;"/><ipi:attribute name="name" value="{&quot;id&quot;:566973,&quot;uuid&quot;:&quot;0673ace8-8b21-7ca7-b400-5a8bc8995ac3&quot;,&quot;type&quot;:&quot;registry&quot;,&quot;name&quot;:&quot;Catch Event  _bb86fff81e444093a6f20cff620e523f&quot;,&quot;title&quot;:&quot;Catch Event  &quot;,&quot;autoGenerated&quot;:true,&quot;translationLanguage&quot;:&quot;en-US&quot;,&quot;inforStandard&quot;:false}"/></bpmn:extensionElements><bpmn:incoming>Flow_0bur1no</bpmn:incoming><bpmn:linkEventDefinition id="LinkEventDefinition_0nz503y" name=""><bpmn:extensionElements/></bpmn:linkEventDefinition></bpmn:intermediateThrowEvent><bpmn:subProcess id="Activity_1a4ehmg" name="P 1"><bpmn:documentation/><bpmn:extensionElements><ipi:attribute name="new_cust4" value="1"/><ipi:attribute name="prs00003" value="&quot;&quot;"/><ipi:attribute name="prs00002" value="&quot;&quot;"/><ipi:attribute name="processownerv1" value="&quot;&quot;"/><ipi:attribute name="new_cust" value="&quot;&quot;"/><ipi:attribute name="rt24v11jiraipit200custattr1" value="&quot;&quot;"/><ipi:attribute name="vittorioattribute" value="&quot;&quot;"/><ipi:attribute name="spacef" value="&quot;&quot;"/><ipi:attribute name="gru" value="&quot;&quot;"/><ipi:attribute name="name" value="{&quot;id&quot;:566971,&quot;uuid&quot;:&quot;0673ace8-8af5-7b1f-a000-c0a04fe72a95&quot;,&quot;type&quot;:&quot;registry&quot;,&quot;name&quot;:&quot;P 1_de6651e83a7c41e6a2ac40a0d99e4b79&quot;,&quot;title&quot;:&quot;P 1&quot;,&quot;autoGenerated&quot;:true,&quot;translationLanguage&quot;:&quot;en-US&quot;,&quot;inforStandard&quot;:false}"/></bpmn:extensionElements><bpmn:incoming>Flow_0tuu0mh</bpmn:incoming><bpmn:outgoing>Flow_12o7u3a</bpmn:outgoing></bpmn:subProcess><bpmn:subProcess id="Activity_0avahb9" name="P 2"><bpmn:documentation/><bpmn:extensionElements><ipi:attribute name="new_cust4" value="1"/><ipi:attribute name="prs00003" value="&quot;&quot;"/><ipi:attribute name="prs00002" value="&quot;&quot;"/><ipi:attribute name="processownerv1" value="&quot;&quot;"/><ipi:attribute name="new_cust" value="&quot;&quot;"/><ipi:attribute name="rt24v11jiraipit200custattr1" value="&quot;&quot;"/><ipi:attribute name="vittorioattribute" value="&quot;&quot;"/><ipi:attribute name="spacef" value="&quot;&quot;"/><ipi:attribute name="gru" value="&quot;&quot;"/><ipi:attribute name="name" value="{&quot;id&quot;:566972,&quot;uuid&quot;:&quot;0673ace8-8b15-7d3f-b800-faad68824a1c&quot;,&quot;type&quot;:&quot;registry&quot;,&quot;name&quot;:&quot;P 2_359a4650e3724cd1a9768e0633284568&quot;,&quot;title&quot;:&quot;P 2&quot;,&quot;autoGenerated&quot;:true,&quot;translationLanguage&quot;:&quot;en-US&quot;,&quot;inforStandard&quot;:false}"/></bpmn:extensionElements><bpmn:incoming>Flow_12o7u3a</bpmn:incoming><bpmn:outgoing>Flow_0bur1no</bpmn:outgoing></bpmn:subProcess><bpmn:sequenceFlow id="Flow_0tuu0mh" sourceRef="Event_0pd7zpg" targetRef="Activity_1a4ehmg"/><bpmn:sequenceFlow id="Flow_0bur1no" sourceRef="Activity_0avahb9" targetRef="Event_0f4c2ej"/><bpmn:sequenceFlow id="Flow_12o7u3a" sourceRef="Activity_1a4ehmg" targetRef="Activity_0avahb9"/></bpmn:process><bpmn:category id="Category_017n7lg"><bpmn:categoryValue id="CategoryValue_10ge77s" value="G1"/></bpmn:category><bpmn:process id="Process_1thst87"/><bpmndi:BPMNDiagram id="BPMNDiagram_1"><bpmndi:BPMNPlane bpmnElement="Collaboration_1p64v2h" id="BPMNPlane_1"><bpmndi:BPMNShape bioc:fill="#ffffff" bioc:stroke="#000000" bpmnElement="Participant_0z5mlq7" id="Participant_0z5mlq7_di" isHorizontal="true"><dc:Bounds height="250" width="600" x="195" y="-283"/><bpmndi:BPMNLabel/></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement="Lane_1fk5zfy" id="Lane_1fk5zfy_di" isHorizontal="true"><dc:Bounds height="65" width="570" x="225" y="-283"/><bpmndi:BPMNLabel/></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement="Lane_09t5q0x" id="Lane_09t5q0x_di" isHorizontal="true"><dc:Bounds height="185" width="570" x="225" y="-218"/><bpmndi:BPMNLabel/></bpmndi:BPMNShape><bpmndi:BPMNShape bioc:fill="#ffffff" bpmnElement="Event_0pd7zpg" color:background-color="#ffffff" id="Event_1ryqbly_di"><dc:Bounds height="58" width="48" x="295" y="-186"/><bpmndi:BPMNLabel><dc:Bounds height="14" width="61" x="292" y="-121"/></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement="Event_0f4c2ej" id="Event_1ivmte3_di"><dc:Bounds height="36" width="48" x="717" y="-186"/><bpmndi:BPMNLabel><dc:Bounds height="14" width="60" x="715" y="-143"/></bpmndi:BPMNLabel></bpmndi:BPMNShape><bpmndi:BPMNShape bioc:fill="#ffffff" bioc:stroke="#000000" bpmnElement="Activity_1a4ehmg" id="Activity_1bp2l87_di"><dc:Bounds height="90" width="100" x="395" y="-218"/><bpmndi:BPMNLabel/></bpmndi:BPMNShape><bpmndi:BPMNShape bioc:fill="#ffffff" bioc:stroke="#000000" bpmnElement="Activity_0avahb9" id="Activity_1ulax6s_di"><dc:Bounds height="90" width="100" x="555" y="-218"/><bpmndi:BPMNLabel/></bpmndi:BPMNShape><bpmndi:BPMNEdge bpmnElement="Flow_0tuu0mh" id="Flow_0tuu0mh_di"><di:waypoint x="340" y="-168"/><di:waypoint x="395" y="-168"/></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement="Flow_0bur1no" id="Flow_0bur1no_di"><di:waypoint x="655" y="-168"/><di:waypoint x="717" y="-168"/></bpmndi:BPMNEdge><bpmndi:BPMNEdge bpmnElement="Flow_12o7u3a" id="Flow_12o7u3a_di"><di:waypoint x="495" y="-168"/><di:waypoint x="555" y="-168"/></bpmndi:BPMNEdge><bpmndi:BPMNShape bioc:fill="#ffffff" bioc:stroke="#000000" bpmnElement="Participant_1hdd1r7" id="Participant_1hdd1r7_di" isHorizontal="true"><dc:Bounds height="250" width="600" x="195" y="-10"/><bpmndi:BPMNLabel/></bpmndi:BPMNShape><bpmndi:BPMNShape bpmnElement="Group_0l7nxmm" id="Group_0l7nxmm_di"><dc:Bounds height="300" width="300" x="-150" y="-290"/><bpmndi:BPMNLabel><dc:Bounds height="14" width="15" x="-5" y="-283"/></bpmndi:BPMNLabel></bpmndi:BPMNShape></bpmndi:BPMNPlane></bpmndi:BPMNDiagram><bpmndi:BPMNDiagram id="BPMNDiagram_16vpo99"><bpmndi:BPMNPlane bpmnElement="Activity_1a4ehmg" id="BPMNPlane_1q3vgkj"/></bpmndi:BPMNDiagram><bpmndi:BPMNDiagram id="BPMNDiagram_15wjmr5"><bpmndi:BPMNPlane bpmnElement="Activity_0avahb9" id="BPMNPlane_1mxt2nl"/></bpmndi:BPMNDiagram></bpmn:definitions>`;
  selectedElement:ModdleElement;
  selectedElementType = '';
  fontSize = '12';

  async ngOnInit(): Promise<void> {
    this.modeler = new Modeler({
      container: this.bpmnModeler.nativeElement,
      additionalModules: [
        {
          __init__: ['customRenderer','resizeTasks'],
          customRenderer: ['type', CustomRenderer],
          resizeTasks: ['type', CustomRules],
        },
      ],
      moddleExtensions: MODDLE_EXTENSIONS,
    });
    this.canvas = this.modeler?.get('canvas');

    await this.renderDiagram(this.xml);

    this.setupListeners();

  }

  private async renderDiagram(xml: string) {
    try {
      await this.modeler.importXML(xml);
    } catch (error) {
      console.log(error)
    }
    this.centerModel();
  }

  private setupListeners(){
    const eventBus = this.modeler?.get('eventBus');
    eventBus.on(
      ['element.click'],
      async ({ element }: { element: ModdleElement }) => {
        this.selectedElement = element;
        this.selectedElementType = element.type;
        const extension = element.extensionElements?.values?.find((val: { name: string; }) => val.name === 'fontSize');
        this.fontSize = extension?.value || '12';
      }
    );
  }

  private centerModel() {
    const zoomVal = this.canvas?.zoom('fit-viewport', 'auto');
    this.canvas?.zoom(zoomVal - 0.07, 'auto');
  }

  setFontSize(){
    // const registry = this.modeler.get('elementRegistry');
    // const bpmnElement = registry.get(this.selectedElement.id);
    const extensionElements = getUpdatedExtensions(this.modeler, 'fontSize', this.fontSize);
    updateProperties(this.modeler, this.selectedElement, { extensionElements });
  }

  ngOnDestroy(): void {
    this.modeler?.clear();
  }

}
