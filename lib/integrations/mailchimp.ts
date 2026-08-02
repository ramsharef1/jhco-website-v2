// Mailchimp Email Marketing Integration
// @ts-ignore
import mailchimp from '@mailchimp/mailchimp_marketing';

mailchimp.setConfig({
  apiKey: process.env.MAILCHIMP_API_KEY,
  server: 'us1', // Your server prefix
});

export async function subscribeToNewsletter(email: string, name?: string) {
  try {
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID || '',
      {
        email_address: email,
        status: 'subscribed',
        merge_fields: {
          FNAME: name?.split(' ')[0] || '',
          LNAME: name?.split(' ')[1] || '',
        },
      }
    );
    return { success: true, data: response };
  } catch (error) {
    console.error('Newsletter subscription error:', error);
    return { success: false, error: String(error) };
  }
}

export async function addDonorToSegment(email: string, segment: string) {
  try {
    // Add donor to specific segment
    const response = await mailchimp.lists.addListMember(
      process.env.MAILCHIMP_AUDIENCE_ID || '',
      {
        email_address: email,
        status: 'subscribed',
        tags: [segment],
      }
    );
    return { success: true, data: response };
  } catch (error) {
    console.error('Segment error:', error);
    return { success: false, error: String(error) };
  }
}

export async function sendCampaignEmail(
  audienceId: string,
  subject: string,
  htmlContent: string
) {
  try {
    // Create and send campaign
    const campaign = await mailchimp.campaigns.create({
      type: 'regular',
      recipients: { list_id: audienceId },
      settings: {
        subject_line: subject,
        from_name: 'JHCO',
        reply_to: 'noreply@jhco.org.jo',
      },
    });

    // Set content
    await mailchimp.campaigns.setContent(campaign.id, {
      html: htmlContent,
    });

    // Send campaign
    await mailchimp.campaigns.send(campaign.id);

    return { success: true, campaignId: campaign.id };
  } catch (error) {
    console.error('Campaign error:', error);
    return { success: false, error: String(error) };
  }
}
